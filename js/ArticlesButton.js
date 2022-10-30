const r = document.querySelector(':root');

var bodyWrap = document.getElementsByTagName("body")[0];
var pageWrap = document.getElementById("page");

var introWrap = null;
var workWrap = null;
var aboutWrap = null;
var contactWrap = null;
var closebtnWrap = null;

var pageSave = null;


window.addEventListener("mousemove", () => {
    pageWrap = document.getElementById("page");
    introWrap = document.getElementById("Intro");
    aboutWrap = document.getElementById("About");
    workWrap = document.getElementById("Work");
    contactWrap = document.getElementById("Contact");

    // Work button
    if(introWrap != null)
    introWrap.onclick = () =>{
            pageWrap.classList.add("fadingEffect");
            pageWrap.style.setProperty("opacity", 0);
            pageWrap.style.setProperty("transform", "scale(0.8)")
            bodyWrap.style.setProperty('overflow-y', 'visible')

            setTimeout(function () {
                pageWrap.style.setProperty("transform", "scale(1)")
                pageSave = pageWrap.cloneNode(true);
                r.style.setProperty('--border-margin', '85%');
                pageWrap.innerHTML= creatArticleHtml('Intro',   'personWalking.jpg', content1, content2);

                pageWrap.style.setProperty("opacity", 1);

                closebtnWrap = document.getElementById  ("ExitButton");

                closebtnWrap.onclick = () =>{
                    pageWrap.style.setProperty("opacity", 0);
                    setTimeout(function () {
                        pageWrap.innerHTML = pageSave.innerHTML;
                        pageWrap.style.setProperty("opacity", 1); 
                        bodyWrap.style.setProperty("overflow-y","hidden");
                    }, 1000);                    
                }
            }, 1000);            
    }

    // About button
    if(aboutWrap != null)
    aboutWrap.onclick = () =>{
        pageWrap.classList.add("fadingEffect");
        pageWrap.style.setProperty("opacity", 0);
        pageWrap.style.setProperty("transform", "scale(0.8)")
        bodyWrap.style.setProperty("overflow-y","visible")

        setTimeout(function () {
            pageWrap.style.setProperty("transform", "scale(1)")
            pageSave = pageWrap.cloneNode(true);
            r.style.setProperty('--border-margin', '85%');
            pageWrap.innerHTML= creatArticleHtml('About', 'mountain.jpg', content1, content2);

            pageWrap.style.setProperty("opacity", 1);

            closebtnWrap = document.getElementById  ("ExitButton");

            closebtnWrap.onclick = () =>{
                pageWrap.style.setProperty("opacity", 0);
                setTimeout(function () {
                    pageWrap.innerHTML = pageSave.innerHTML;
                    pageWrap.style.setProperty("opacity", 1); 
                    bodyWrap.style.setProperty("overflow-y","hidden");
                }, 1000);                    
            }
        }, 1000);            
    }

    //Work button
    if(workWrap != null)
    workWrap.onclick = () =>{
        pageWrap.classList.add("fadingEffect");
        pageWrap.style.setProperty("opacity", 0);
        pageWrap.style.setProperty("transform", "scale(0.8)")
        bodyWrap.style.setProperty("overflow-y","visible")

        setTimeout(function () {
            pageWrap.style.setProperty("transform", "scale(1)")
            pageSave = pageWrap.cloneNode(true);
            r.style.setProperty('--border-margin', '85%');
            pageWrap.innerHTML= creatArticleHtml('Work', 'Code.jpg', content1, content2);

            pageWrap.style.setProperty("opacity", 1);

            closebtnWrap = document.getElementById  ("ExitButton");

            closebtnWrap.onclick = () =>{
                pageWrap.style.setProperty("opacity", 0);
                setTimeout(function () {
                    pageWrap.innerHTML = pageSave.innerHTML;
                    pageWrap.style.setProperty("opacity", 1);
                    bodyWrap.style.setProperty("overflow-y","hidden");
                }, 1000);                    
            }
        }, 1000);            
    }

    if(contactWrap != null)
    contactWrap.onclick = () =>{
        pageWrap.classList.add("fadingEffect");
        pageWrap.style.setProperty("opacity", 0);
        pageWrap.style.setProperty("transform", "scale(0.8)")
        bodyWrap.style.setProperty("overflow-y","visible")

        setTimeout(function () {
            pageWrap.style.setProperty("transform", "scale(1)")
            pageSave = pageWrap.cloneNode(true);
            r.style.setProperty('--border-margin', '78%');
            pageWrap.innerHTML= createContactFormHtml();

            pageWrap.style.setProperty("opacity", 1);

            var resetBtn = document.getElementById('Reset');
            var nameText = document.getElementById('User');
            var emailText = document.getElementById('Email');
            var textarea = document.getElementsByTagName('textarea')[0];

            resetBtn.onclick = () =>{
                nameText.value='';
                emailText.value='';
                textarea.value='';
            }

            closebtnWrap = document.getElementById  ("ExitButton");

            closebtnWrap.onclick = () =>{
                pageWrap.style.setProperty("opacity", 0);
                setTimeout(function () {
                    pageWrap.innerHTML = pageSave.innerHTML;
                    pageWrap.style.setProperty("opacity", 1);
                    bodyWrap.style.setProperty("overflow-y","hidden");
                }, 1000);                    
            }
        }, 1000);            
    }
});

function creatArticleHtml(title, imagepath, content1, content2){
    var articleHtml = 
    "<div class='article-selected'>" +
        "<h2>"+ title +"</h2>"+
        "<img src='./images/" + imagepath +"'>"+
        "<p>"+
            content1 +
        "</p>"+
        "<p>" +
            content2+
        "</p>"+
        "<div id='ExitButton'>"+
            "<img src='./images/reject.png'>"+
        "</div>"+
    "</div>"
    return articleHtml;
}

function createContactFormHtml(){
    var articleHtml = 
    "<div class='article-selected'>" +
        "<h2>Contact</h2>"+
        "<form>"+
            "<div class = 'FormsLabel'>"+
                "<div class='InnerForms'>"+
                    "<label for='User'>Name</label>"+
                    "<input type='text' id='User' name='Name' />"+
                "</div>"+

                "<div class='InnerForms'>"+
                    "<label for='Email'>Email</label>"+
                    "<input type='email' id='Email' name='Email' />"+
                "</div>"+
            "</div>"+

            "<div class='InnerForms'>"+
                "<label for='Menssage'>Menssage</label>"+
                "<textarea></textarea>"+
            "</div>"+
            "<input class='formsButtons' type='submit' id='Submit' name='Submit' />"+
            "<input class='formsButtons' type='button' id='Reset' name='Reset'  value='Reset'/>"+
        "</form>"+
        "<div id='ExitButton' class='Contact'>"+
            "<img src='./images/reject.png'>"+
        "</div>"+
        "<div class='icons'>"+
            "<i class='fa-brands fa-twitter'></i>"+
            "<i class='fa-brands fa-facebook'></i>"+
            "<i class='fa-brands fa-instagram'></i>"+
            "<i class='fa-brands fa-github'></i>"+
        "</div>"
    "</div>"
    return articleHtml;
}

var content1 = 'Mussum Ipsum, cacilds vidis litro abertis. Cevadisim ampola pa arma uma pindureta.Todo mundo vê osporris que eu tomo, mas ninguém vê os tombis que eulevo!Detraxit consequat et quo num tendi nadaPraesent malesuada urna nisi, quis volutpat erathendrerit non. Nam vulputate dapibus.'
var content2 = "Mussum Ipsum, cacilds vidis litro abertis. Cevadisim ampola pa arma uma pindureta.Todo mundo vê osporris que eu tomo, mas ninguém vê os tombis que eulevo!Detraxit consequat et quo num tendi nadaPraesent malesuada urna nisi, quis volutpat erathendrerit non. Nam vulputate dapibus."