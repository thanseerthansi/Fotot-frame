export default function Scripts() {
   
    const script = document.createElement('script');
    script.src = "assets/js/plugins.js";
    script.src = "assets/js/theme.js";
   
   
    
    script.async = true;
    document.body.appendChild(script);
  


}
