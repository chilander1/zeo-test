"use strict";

var toolItems = [{
    title: "Human assistance",
    description: "Your personal assistant has the solution for your technical problem - whether it is a minor annoyance or a catastrophic failure.",
    id: 'tool--t1'
}, {
    title: "Internet security",
    description: "Protect your Mac from phishing attacks, malware, spyware, adware, viruses and identity theft while you're using the Internet.",
    id: 'tool--t2'
}, {
    title: "Anti-theft",
    description: "If your Mac gets stolen, Anti-Theft will track its location and even make an iSight snapshot of the thief.",
    id: 'tool--t3'
}, {
    title: "Fast cleanup",
    description: "Quickly remove junk files (such as temporary caches, logs, unused language packages and legacy application parts) that may take up hard drive space and slow down your Mac.",
    id: 'tool--t4'
}, {
    title: "Duplicates finder",
    description: "Delete unnecessary copies of your files and free up disk space on your Mac.",
    id: 'tool--t5'
}, {
    title: "Geek on demand",
    description: "Geek on Demand is the ultimate tool when you have a problem or question that is related to your Mac's health and need an expert's opinion or technical assistance.",
    id: 'tool--t6'
}, {
    title: "Update tracker",
    description: "With Update Tracker you will never miss out any important security patches and upgrades for most of your applications.",
    id: 'tool--t7'
}, {
    title: "Backup",
    description: "Backing up your important files and folders is an easy, fast and reliable way to keep them safe and secure.",
    id: 'tool--t8'
}, {
    title: "Files recovery",
    description: "Now you can recover files that were once deleted from the Trash!",
    id: 'tool--t9'
}, {
    title: "Disk usage",
    description: "Visualize the size of the folders on your hard drive so you can tell at a glance which folders are taking up the most space.",
    id: 'tool--t10'
}, {
    title: "Smart uninstaller",
    description: "Prevent future junk by making sure that you're not just sweeping old applications under the rug when you are trying to delete them.",
    id: 'tool--t11'
}, {
    title: "Data encryptor",
    description: "Make your restricted files absolutely invisible to anyone without the right password, protecting even your most sensitive information.",
    id: 'tool--t12'
}, {
    title: "Default apps",
    description: "The easiest way to define which application will open each file type.",
    id: 'tool--t13'
}, {
    title: "Shredder",
    description: "Securely delete files and folders that you don't ever want to be recovered.",
    id: 'tool--t14'
}, {
    title: "Files finder",
    description: "Quickly search for and find any lost or misplaced file, even if you don't know in which folder it is located.",
    id: 'tool--t15'
}, {
    title: "Login items",
    description: "Take control of how fast your Mac boots up by deciding which applications launch every time you start it.",
    id: 'tool--t16'
}, {
    title: "Memory Cleaner",
    description: "Automatically optimizes and monitors your Mac’s RAM memory while you are performing your daily tasks.",
    id: 'tool--t17'
}];
var d = document;
var tool = d.querySelectorAll(".hex-item");
var itemId = void 0;
var lastToolId = tool[tool.length - 1].id;

function showTool(toolId) {

    function findId(name) {
        return name.id === toolId;
    }

    var clickedObject = toolItems.find(findId);
    var title = clickedObject.title;
    var description = clickedObject.description;

    var html = "\n                  <div class=\"choose-item " + toolId + "\"></div>\n                    <div class=\"title\">" + title + "</div>";
    var descrip = "" + description;

    d.querySelector(".title-block").innerHTML = html;
    d.querySelector(".tolls-description .text").innerHTML = descrip;
    tool.forEach(function (item) {
        item.className = 'hex-item';
    });
    d.getElementById(toolId).className += ' active';
}
showTool(lastToolId);

for (var i = 0, len = tool.length; i < len; i++) {
    tool[i].addEventListener("click", function () {
        itemId = this.id;
        showTool(itemId);
    });
}