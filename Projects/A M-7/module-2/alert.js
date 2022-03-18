// alert('Ma is coming');
function MaComing() {
    alert('Ma on her way!!')
}

function askPicnic() {
    const response = confirm('Are you going to picnic with us??');
    if (response === true) {
        alert('Amake Fee ta bkash kore de!');
    }
    else {
        alert('Mor');
    }
};

const askName = () => {
    const name = prompt('What is ur name');
    if (name) {
        console.log(name);
    }
}