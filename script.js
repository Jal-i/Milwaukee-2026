const contactData = {
  firstName: "Familia",
  lastName: "Lancouquis",
  organization: "Milwaukee 2026",
  phone: "+5490000000000",
  email: "contacto@ejemplo.com",
  website: "https://tusitio.com",
  instagram: "https://instagram.com/tuusuario"
};

function createVCard() {

  return `
BEGIN:VCARD
VERSION:3.0
N:${contactData.lastName};${contactData.firstName}
FN:${contactData.firstName} ${contactData.lastName}
ORG:${contactData.organization}
TEL;TYPE=CELL:${contactData.phone}
EMAIL:${contactData.email}
URL:${contactData.website}
NOTE:Instagram ${contactData.instagram}
END:VCARD
`.trim();

}

function downloadVCard() {

  const vCard = createVCard();

  const blob = new Blob(
    [vCard],
    { type: "text/vcard;charset=utf-8" }
  );

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = "Familia-Lancouquis.vcf";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);

}

document.addEventListener("DOMContentLoaded", () => {

  const saveButton = document.getElementById("saveContact");

  if (saveButton) {

    saveButton.addEventListener("click", function (e) {

      e.preventDefault();

      downloadVCard();

    });

  }

});