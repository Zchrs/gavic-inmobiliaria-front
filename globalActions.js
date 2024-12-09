/* eslint-disable no-unused-vars */

export const getFile = (route, url, extension = 'svg') => {
    return new URL(
      `/src/assets/${route}/${url}.${extension}`,
      import.meta.url
    ).href;
  }
export const getImg = (route, url, extension = 'svg') => {
    return new URL(
      `/src/assets/img/${route}/${url}.${extension}`,
      import.meta.url
    ).href;
  }

  export const scrollTop = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  export const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  
  // export const socialMedia = {
  //  linkedin: window.open(`https://www.linkedin.com/company/muebles-jir%C3%A9h`, '_blank'),
  //  facebook: window.open(`https://www.facebook.com/profile.php?id=61560579672075`, '_blank'),
  //  instagram: window.open(``, '_blank'),
  //  tiktok: window.open(``, '_blank'),
  // } 
  
  