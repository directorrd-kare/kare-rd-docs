# Office of Research and Development, KARE - Document Download Center

A clean, modern, and responsive portal for scholars and faculty to download official Word document forms (`.docx`, `.doc`) with instant **one-click direct downloads**, hosted via **GitHub Pages**.

---

## 📁 Project Structure

```text
word-document-portal/
├── index.html        # Main landing page & user interface
├── documents.js      # List of all your documents (add new forms here)
├── app.js            # Search, filter, sorting, and UI interactions
├── Round Logo.jpg    # Top navigation logo & favicon
├── Updated Logo.jpeg # Main header institutional logo
├── .nojekyll         # Disables Jekyll on GitHub Pages (ensures fast static serving)
├── README.md         # Deployment guide
└── files/            # Put all your .docx or .doc files here
    └── 1.Ph.D. Registration Form.docx
```

---

## 📝 How to Add More Documents

1. Place your `.docx` file into the `files/` folder (e.g. `files/Supervisor-Nomination-Form.docx`).
2. Open `documents.js` and add an entry with one of the 3 supported categories (`"For Scholars"`, `"For Supervisors"`, or `"For SRC Chairman"`):

```javascript
{
  id: "doc-2",
  title: "Supervisor Acceptance & Consent Form",
  filename: "Supervisor-Nomination-Form.docx",
  category: "For Supervisors",
  version: "v1.0",
  description: "Official supervisor consent and scholar allocation form."
},
```

---

## 🌐 How to Host on GitHub Pages (Step-by-Step)

1. Log in to [GitHub.com](https://github.com).
2. Click **`+`** (top right) → **New repository**.
3. Name your repository (e.g., `research-docs` or `kare-rd-downloads`).
4. Set it to **Public** and click **Create repository**.
5. Click **uploading an existing file**.
6. Drag and drop all files (`index.html`, `documents.js`, `app.js`, `.nojekyll`, and the `files` folder) into GitHub.
7. Click **Commit changes**.
8. Go to **Settings** → **Pages** (in the left sidebar).
9. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **`main`** (or `master`) and folder **`/(root)`**
   - Click **Save**.

Your live URL will be ready at:
`https://<your-username>.github.io/<repository-name>/`
