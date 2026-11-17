/**
 * Document Catalog Configuration
 * Office of Research and Development, KARE
 * -------------------------------------------------------------
 * Valid Categories:
 * - "For Scholars"
 * - "For Supervisors"
 * - "For SRC Chairman"
 *
 * NOTE: The 'filename' property must EXACTLY match the file in files/
 * including dots, spaces, and hyphens so GitHub Pages can serve them.
 */

const documentsData = [
  // ==========================================
  // FOR SCHOLARS (12 Documents)
  // ==========================================
  {
    id: "doc-1",
    title: "1.Ph.D. Registration Form",
    filename: "1.Ph.D. Registration Form.docx",
    category: "For Scholars",
    description: "Ph.D. Registration Form"
  },
  {
    id: "doc-2",
    title: "2. Course Work Registration Form",
    filename: "2.Course Work Registration Form.docx",
    category: "For Scholars",
    description: "Course Work Registration Form"
  },
  {
    id: "doc-3",
    title: "3. Ph.D. Registration Renewal Form",
    filename: "3.Ph.D. Registration Renewal Form.docx",
    category: "For Scholars",
    description: "Ph.D. Registration Renewal Form"
  },
  {
    id: "doc-4",
    title: "4. Format for Progress Report",
    filename: "4.Format for Progress Report.docx",
    category: "For Scholars",
    description: "Format for Progress Report"
  },
  {
    id: "doc-5",
    title: "5. Request letter for conducting Comprehensive Viva",
    filename: "5.Request letter for conducting Comprehensive Viva.docx",
    category: "For Scholars",
    description: "Request letter for conducting Comprehensive Viva"
  },
  {
    id: "doc-6",
    title: "6. Request letter for conducting Presynopsis and Synopsis",
    filename: "6.Request letter for conducting Presynopsis and Synopsis.docx",
    category: "For Scholars",
    description: "Request letter for conducting Presynopsis and Synopsis"
  },
  {
    id: "doc-7",
    title: "7. Guidelines for Synopsis Submission",
    filename: "7.Guidelines for Synopsis Submission.docx",
    category: "For Scholars",
    description: "Guidelines for Synopsis Submission"
  },
  {
    id: "doc-8",
    title: "8. Synopsis Submission Check List",
    filename: "8.Synopsis Submission Check List.docx",
    category: "For Scholars",
    description: "Synopsis Submission Check List"
  },
  {
    id: "doc-9",
    title: "9. Proforma for Synopsis Submission",
    filename: "9.Proforma for Synopsis Submission.docx",
    category: "For Scholars",
    description: "Proforma for Synopsis Submission"
  },
  {
    id: "doc-10",
    title: "10. Certificate of Plagiarism",
    filename: "10.Certificate of Plagiarism.docx",
    category: "For Scholars",
    description: "Certificate of Plagiarism"
  },
  {
    id: "doc-11",
    title: "11. Guidelines for Thesis Submission",
    filename: "11. Guidelines for Thesis Submission.docx",
    category: "For Scholars",
    description: "Guidelines for Thesis Submission"
  },
  {
    id: "doc-12",
    title: "13. Format for Increment in University Research Fellowship (URF)",
    filename: "13.Research-Fellowship-URF.docx",
    category: "For Scholars",
    description: "Format for Increment in University Research Fellowship (URF)"
  },

  // ==========================================
  // FOR SUPERVISORS (23 Documents)
  // ==========================================
  {
    id: "doc-13",
    title: "1. Application for Recognition as Research Supervisor for Ph.D. Degree",
    filename: "1.Application for Recognition as Research Supervisor.docx",
    category: "For Supervisors",
    description: "Application for Recognition as Research Supervisor for Ph.D. Degree"
  },
  {
    id: "doc-14",
    title: "2. Format for RAC Circular",
    filename: "2.Format for RAC Circular.docx",
    category: "For Supervisors",
    description: "Format for RAC Circular"
  },
  {
    id: "doc-15",
    title: "3. Format of Course Work Allocation Minutes – 1st RAC Minutes",
    filename: "3.Format for Course Work Allocation Minutes.docx",
    category: "For Supervisors",
    description: "Format of Course Work Allocation Minutes – 1st RAC Minutes"
  },
  {
    id: "doc-16",
    title: "4. Format for RAC _ Progress Review Minutes",
    filename: "4.Format for RAC_Progress Review Minutes.docx",
    category: "For Supervisors",
    description: "Format for RAC _ Progress Review Minutes"
  },
  {
    id: "doc-17",
    title: "5. Format for Comprehensive Viva Minutes",
    filename: "5.Format for Comprehensive Viva Minutes.docx",
    category: "For Supervisors",
    description: "Format for Comprehensive Viva Minutes"
  },
  {
    id: "doc-18",
    title: "6. Circular Format for Presynopsis Meeting",
    filename: "6. RAC Notification for the pre-synopsis seminar_template.docx",
    category: "For Supervisors",
    description: "Circular Format for Presynopsis Meeting"
  },
  {
    id: "doc-19",
    title: "7. Attendance Sheet format for Presynopsis meeting",
    filename: "7.Attendance Sheet format for Presynopsis meeting.docx",
    category: "For Supervisors",
    description: "Attendance Sheet format for Presynopsis meeting"
  },
  {
    id: "doc-20",
    title: "8. Template for Synopsis Meeting circular",
    filename: "8.Template for Synopsis Meeting_circular.docx",
    category: "For Supervisors",
    description: "Template for Synopsis Meeting circular"
  },
  {
    id: "doc-21",
    title: "9. Template for Synopsis Minutes",
    filename: "9.Template for Synopsis Minutes.docx",
    category: "For Supervisors",
    description: "Template for Synopsis Minutes"
  },
  {
    id: "doc-22",
    title: "10. Format for Synopsis Report Forwarding Letter",
    filename: "10.Format for Synopsis Report Forwarding Letter.docx",
    category: "For Supervisors",
    description: "Format for Synopsis Report Forwarding Letter"
  },
  {
    id: "doc-23",
    title: "11. Format for Panel of Examiners",
    filename: "11.Format for Panel of Examiners.docx",
    category: "For Supervisors",
    description: "Format for Panel of Examiners"
  },
  {
    id: "doc-24",
    title: "12. Format for Thesis Report Forwarding Letter",
    filename: "12.Format for Thesis Report Forwarding Letter.docx",
    category: "For Supervisors",
    description: "Format for Thesis Report Forwarding Letter"
  },
  {
    id: "doc-25",
    title: "13. Format for Thesis Correction Meeting Circular",
    filename: "13.Format for Thesis Correction Meeting Circular.docx",
    category: "For Supervisors",
    description: "Format for Thesis Correction Meeting Circular"
  },
  {
    id: "doc-26",
    title: "14. Format for Thesis Evaluation Reports Review Minutes-Without Correction",
    filename: "14.Format for Thesis Evaluation Reports Review Minutes-Without Correction.docx",
    category: "For Supervisors",
    description: "Format for Thesis Evaluation Reports Review Minutes-Without Correction"
  },
  {
    id: "doc-27",
    title: "15. Format for Thesis Evaluation Reports Review Minutes-With Correction",
    filename: "15.Format for Thesis Evaluation Reports Review Minutes-With Correction.docx",
    category: "For Supervisors",
    description: "Format for Thesis Evaluation Reports Review Minutes-With Correction"
  },
  {
    id: "doc-28",
    title: "16. Format for Notification of the Ph.D. Public Viva-Voce Examination",
    filename: "16.Ph.D. Notification-for-Viva-Voice-Exam.docx",
    category: "For Supervisors",
    description: "Format for Notification of the Ph.D. Public Viva-Voce Examination"
  },
  {
    id: "doc-29",
    title: "17. Attendance Sheet format for Viva-Voce Meeting",
    filename: "17.Attendance Sheet format for Viva-Voce Meeting.docx",
    category: "For Supervisors",
    description: "Attendance Sheet format for Viva-Voce Meeting"
  },
  {
    id: "doc-30",
    title: "18. Template for Ph.D. Viva Minutes",
    filename: "18.Template for Ph.D. Viva Minutes.docx",
    category: "For Supervisors",
    description: "Template for Ph.D. Viva Minutes"
  },
  {
    id: "doc-31",
    title: "19. Format for attendance sheet – RAC meeting",
    filename: "19.Format for attendance sheet  - RAC meeting.docx",
    category: "For Supervisors",
    description: "Format for attendance sheet – RAC meeting"
  },
  {
    id: "doc-32",
    title: "20. Format for Consolidated RAC Attendance Sheet ODD_EVEM Semester 2022-2023",
    filename: "20.Format for Consolidated RAC Attendance Sheet.docx",
    category: "For Supervisors",
    description: "Format for Consolidated RAC Attendance Sheet"
  },
  {
    id: "doc-33",
    title: "21. Format for checklist for submitting the documents after research advisory committee meeting",
    filename: "21. Format for Individual Checklist.docx",
    category: "For Supervisors",
    description: "Format for checklist for submitting the documents after research advisory committee meeting"
  },
  {
    id: "doc-34",
    title: "22. Bill Claim Form – TA and Sitting Fees",
    filename: "22.-Bill-Claim-Form-TA-AND-SITTING-FEE.docx",
    category: "For Supervisors",
    description: "Bill Claim Form – TA and Sitting Fees"
  },
  {
    id: "doc-35",
    title: "23. Bill Claim Form – Refreshment Expenses",
    filename: "23.-Bill-Claim-Form-Refreshment-Expenses.docx",
    category: "For Supervisors",
    description: "Bill Claim Form – Refreshment Expenses"
  },

  // ==========================================
  // FOR SRC CHAIRMAN (4 Documents)
  // ==========================================
  {
    id: "doc-36",
    title: "1. Format for Research Supervisor Allocation Minutes",
    filename: "1.Format for Research Supervisor Allocation Minutes.docx",
    category: "For SRC Chairman",
    description: "Format for Research Supervisor Allocation Minutes"
  },
  {
    id: "doc-37",
    title: "2. Application for Change of Supervisor for Ph.D",
    filename: "2.Application for Change of Supervisor for Ph.D.docx",
    category: "For SRC Chairman",
    description: "Application for Change of Supervisor for Ph.D"
  },
  {
    id: "doc-38",
    title: "3. Format for Reallocate the Research Supervisor Minutes",
    filename: "3.Format for Reallocate the Research Supervisor Minutes.docx",
    category: "For SRC Chairman",
    description: "Format for Reallocate the Research Supervisor Minutes"
  },
  {
    id: "doc-39",
    title: "4. Format for SRC Minutes for finalising the dates for RAC meeting",
    filename: "4.Format for SRC Minutes for finalising the dates for RAC meeting.docx",
    category: "For SRC Chairman",
    description: "Format for SRC Minutes for finalising the dates for RAC meeting"
  }
];
