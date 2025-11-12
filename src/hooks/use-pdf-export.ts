import { useRef, useCallback } from "react";

declare global {
  interface Window {
    html2canvas: any;
    jsPDF: any;
  }
}

export const usePdfExport = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const exportToPdf = useCallback(async () => {
    if (!contentRef.current) return;

    try {
      const [html2canvas, jsPDF] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);

      const canvas = await html2canvas.default(contentRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF.default("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("CV_Трибис_Александр.pdf");
    } catch (error) {
      console.error("Ошибка при экспорте в PDF:", error);
      alert("Произошла ошибка при экспорте в PDF");
    }
  }, []);

  return { contentRef, exportToPdf };
};
