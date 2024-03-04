"use strict";

const closeBtn = document.querySelector(".close-btn");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const links=document.querySelector('.links');
const sidebar=document.querySelector('.sidebar')

sidebarToggle.addEventListener('click',function(){
    if(sidebar.classList.contains('show-sidebar'))
    {
        sidebar.classList.remove('show-sidebar');
    }
    else 
    {
        sidebar.classList.add('show-sidebar')
    }
})

closeBtn.addEventListener('click',function(){
    sidebar.classList.remove('show-sidebar')
})