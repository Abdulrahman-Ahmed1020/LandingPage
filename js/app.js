// this variable to store all sections in it
let allSections = document.querySelectorAll('section');
// this variable to select the <ul> which is inside the <nav> which is inside the <header>
const ulNav = document.getElementById('navbar__list');
// this variable to select my button 
const myButton = document.querySelector('div.forTop');
// this varable to select my createingButton
const createingButton = document.querySelector('button.createSection');
// this variable to store the '5' and i stored it to use in add section to page 
let counter = 5;

// this function to add the items to navbar
function addItems() {
   // this loop for repeat the code inside this loop for each section
   for (let i = 0; i < allSections.length; i++) {
      //this variable is used to store the value of section id attribute
      const sectionId = allSections[i].getAttribute('id');
      // this vaiable is used to store the value of section data-nav attribute
      const sectionName = allSections[i].getAttribute('data-nav');

      /*here i used appendChild to create li element inside ul element.
      * i used innerHTML to write (a) element with href to when i clicked it,
         the page scroll to the section with id equal the value of the (a) element href attribute
      * and class = menu__link to give him the css
      */
      ulNav.appendChild(document.createElement('li')).innerHTML = `<a class="menu__link" href="#${sectionId}">${sectionName}</a>`
   }
}

// this function to see if the section is in the viewport or not and also add or remove (your active class) class
function addActiveClass() {
   // this loop for repeat the code which inside this loop
   for (let i = 0; i < allSections.length; i++) {
      /*
      * this if condition for know the section in viewport or not
      * if section is in viewport it will do operation
      * if section isn't in viewport it will remove the (your-active-class) class from the section
      */
      if (allSections[i].getBoundingClientRect().top <= innerHeight / 2 && allSections[i].getBoundingClientRect().bottom >= innerHeight / 2) {
         /* 
         * this if condition for if the section in viewport
         * the second condition is used to check the section if have (your-active-class) class or not 
         * if the section isn't have the (your-active-classs)class, it will add it for the section
         */
         if (!allSections[i].classList.contains('your-active-class')) {
            allSections = document.querySelectorAll('section');
            allSections[i].classList.add('your-active-class');

            /*
            * this for add 'nav' class for the a element which his element in viewport
               the 'nav' class this for give the item in navbar background black and the color of the text is white
            */
            document.querySelectorAll('a')[i].classList.add('nav');
         }
      } else {
         allSections[i].classList.remove('your-active-class');

         // this for remove 'nav' class for the a element which his element in viewport
         document.querySelectorAll('a')[i].classList.remove('nav');
      }
   }
}
//this function for to scroll window to top
function scrollToTop() {
   window.scrollTo(0, 0);
}

// this function to show the button 
function toShowTheButton() {
   /*
   * this condition for to know the scroll of page 
   * if the scroll less than 600 make the display of button equal none,
   * if not make the display of button equal block  
   */
   if (scrollY >= 600) {
      myButton.style.display = 'block';
   } else {
      myButton.style.display = 'none';
   }
}

/* 
* This function to set more than one attribute
*  in this function i set two arguments the first is el this to element 
   the second arguemnt is attrs this to attributes i want to use
*/
function setAttributes(el, attrs) {
   // this loop for to set every attribute in the second argument to the el 
   for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
   }
}

// this function to update the navbar after adding section
function updateNav() {
   // here i created new item in navbar to the new section 
   ulNav.appendChild(document.createElement('li')).innerHTML = `<a class="menu__link" href="#section${counter}">section ${counter}</a>`
}

// this function to add new section to page 
function addSection() {
   // this variable to create new section 
   let myD = document.createElement('section');

   //here i callback the setAttributes to add two attribute to the new section (id , data'nav)
   setAttributes(myD, {
      'id': `section${counter}`,
      'data-nav': `section ${counter}`
   })

   //here i put the new section in main element by appendChild and write in it the content section by innerHTML, and i set in h2 the variable counter
   document.querySelector('main').appendChild(myD).innerHTML = `<div class="landing__container">
               <h2>Section ${counter}</h2>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  fermentum metus faucibus lectus pharetra dapibus. Suspendisse
                  potenti. Aenean aliquam elementum mi, ac euismod augue. Donec
                  eget lacinia ex. Phasellus imperdiet porta orci eget mollis.
                  Sed convallis sollicitudin mauris ac tincidunt. Donec
                  bibendum, nulla eget bibendum consectetur, sem nisi aliquam
                  leo, ut pulvinar quam nunc eu augue. Pellentesque maximus
                  imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis,
                  aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
                  nunc, pharetra et elementum non, faucibus vitae elit. Integer
                  nec libero venenatis libero ultricies molestie semper in
                  tellus. Sed congue et odio sed euismod.
               </p>

               <p>
                  Aliquam a convallis justo. Vivamus venenatis, erat eget
                  pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam
                  ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus.
                  Vestibulum fermentum consectetur porttitor. Suspendisse
                  imperdiet porttitor tortor, eget elementum tortor mollis non.
               </p>
            </div>`;

   // here i callback the upddate function to add the new function to navbar
   updateNav();

   // this to create new section the number of the section increase one number
   counter++;
}

// I callback the addItems function to add items to navbar
addItems();
//when i scroll this Event will run the addActiveClass function for add or remove (your-active-class) class for section
addEventListener('scroll', addActiveClass);
//when i scroll this event will run the toTop function
addEventListener('scroll', toShowTheButton);
// this for when i clicked on button the window scroll to top
myButton.onclick = scrollToTop;
// this for when in clicked on the createing button ,add the new section to page
createingButton.onclick = addSection;

