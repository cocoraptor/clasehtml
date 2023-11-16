//selector de todo
document.querySelectorAll ('img').forEach((element)=>{
    element.src=
    'https://www.petplace.com/article/cats/pet-behavior-training/media_1ea2fe4e900af45435a64aaf9951462a83a7b0747.jpeg?width=1200&format=pjpg&optimize=medium';
});

//selector por id
document.querySelector('par').src=
'https://www.petplace.com/article/cats/pet-behavior-training/media_1ea2fe4e900af45435a64aaf9951462a83a7b0747.jpeg?width=1200&format=pjpg&optimize=medium';

//selector por clases

document.querySelector('.color_bg_pink').style.background='red';

//

  //para saber las imgs y ya te lo devuelve en un array
  const allImages=document.querySelectorAll ('img');

  //metes en las imagenes y cuentas las imgs
  allImages.forEach(function(image,index){
    if (index % 2 === 0) {
        image.src='https://www.petplace.com/article/cats/pet-behavior-training/media_1ea2fe4e900af45435a64aaf9951462a83a7b0747.jpeg?width=1200&format=pjpg&optimize=medium';
    }
    else {
        image.src='https://gestion.portalbiesa.com/redaccio/arxius/imatges/201907/1200_1562841731blog_post_perros-saben-nadar_3.jpg';
    }
  }
    );

    //y se cambian pares al doggo e impares al michi

    
    //ahora se crea array con elementos de amazon
    const arrayAmazon=[
        {document.querySelectorAll('.a-size-base.a-color-base').forEach(element);},
        {document.querySelectorAll('.a-price');},
        {document.querySelectorAll('.a-section.octopus-pc-item-hue-shield.octopus-pc-item-image-background-v3');},
        {document.querySelectorAll('.a-icon-star-mini');},
    ]
//para sleecionar se usa .clase pero para añadir, no
    document.querySelector('.a-icon-star-mini').classList.add('a-star-mini-0');

    //existe toggle que si es verdadero lo hace y si no lo deshace, por lo que si existe hará x, por ejemplo
    document.querySelector('.a-icon-star-mini').classList.toggle('a-star-mini-0');