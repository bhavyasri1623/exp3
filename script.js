const f = document.getElementById('form');
const r = document.getElementById('res');
const o = document.getElementById('out');
const p = document.getElementById('photo');
const s = document.getElementById('sign');

f.onsubmit = e => {
  e.preventDefault();
  if (!f.checkValidity()) return f.reportValidity();

  let t = '';
  for (const [k, v] of new FormData(f)) {
    if (k !== 'photo' && k !== 'signature') {
      t += `${k}: ${v}\n`;
    }
  }
  o.textContent = t;

  ['photo', 'signature'].forEach(n => {
    const file = f[n].files[0];
    if (file) {
      const R = new FileReader();
      R.onload = e => (n === 'photo' ? p : s).src = e.target.result;
      R.readAsDataURL(file);
    }
  });

  f.style.display = 'none';
  r.style.display = 'block';
};

function newForm() {
  f.reset();
  f.style.display = 'block';
  r.style.display = 'none';
  p.src = s.src = '';
}
const form = document.getElementById('form');
const result = document.getElementById('res');
const output = document.getElementById('out');
const photo = document.getElementById('photo');
const sign = document.getElementById('sign');

form.addEventListener('submit', e => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Collect text fields
  let text = '';
  for (const [key, value] of new FormData(form)) {
    if (key !== 'photo' && key !== 'signature') {
      text += `${key}: ${value}\n`;
    }
  }
  output.textContent = text;

  // Preview images
  const showImage = (file, element) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = e => element.src = e.target.result;
      reader.readAsDataURL(file);
    }
  };

  showImage(form.photo.files[0], photo);
  showImage(form.signature.files[0], sign);

  form.style.display = 'none';
  result.style.display = 'block';
});

function newForm() {
  form.reset();
  form.style.display = 'block';
  result.style.display = 'none';
  photo.src = '';
  sign.src = '';
}
