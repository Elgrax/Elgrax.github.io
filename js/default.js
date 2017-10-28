var pdf = new PDFObject({
  url: "https://something.com/HTC_One_XL_User_Guide.pdf",
  id: "resumeRenderer",
  pdfOpenParams: {
    view: "FitH"
  }
}).embed("pdfRenderer");
