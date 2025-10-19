const Time = document.querySelector('[data-testid="test-user-time"]');
const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');
const urlInput = document.getElementById("avatar-url");
const fileInput = document.getElementById("avatar-file");

const updateTime = () => {
  const now = new Date();
  Time.textContent = now.toLocaleTimeString();
};

const getUserUrl = (event) => {
  const url = event.target.value.trim();
  if (url) {
    avatarImg.src = url;
  }
};

const getUserFileInput = (event) => {
  const file = event.target.files[0];
  if (file) {
    const imageURL = URL.createObjectURL(file);
    avatarImg.src = imageURL;
  }

  avatarImg.onload = () => {
    URL.revokeObjectURL(imageURL);
  };
};

updateTime();

setInterval(updateTime, 1000);

urlInput.addEventListener("change", getUserUrl);
fileInput.addEventListener("change", getUserFileInput);
