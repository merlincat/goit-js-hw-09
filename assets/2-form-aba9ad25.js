const s="feedback-form-state",l=document.querySelector(".feedback-form"),e=l.querySelector('input[name="email"]'),t=l.querySelector('textarea[name="message"]');document.addEventListener("DOMContentLoaded",function(){const a=JSON.parse(localStorage.getItem(s))||{};e.value=a.email||"",t.value=a.message||"",l.addEventListener("input",function(){const n={email:e.value.trim(),message:t.value.trim()};localStorage.setItem(s,JSON.stringify(n))})});l.addEventListener("submit",a=>{if(a.preventDefault(),e.value&&t.value){const n={email:e.value,message:t.value};console.log(n),localStorage.removeItem(s),e.value="",t.value=""}else{alert("All form fields must be filled in");return}});
//# sourceMappingURL=2-form-aba9ad25.js.map