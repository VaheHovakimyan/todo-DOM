import menu from './menu.json' assert {type: 'json'};


let menu_container = document.getElementById("menu_elements_container");


function DrawMenu() {


    console.log("Menu", menu);


    menu.map((group) => {
        let div_group = document.createElement("div");
        let p_group = document.createElement("p");
        let arrow_icon = document.createElement("img");

        let seperator = document.createElement("div");

        // let div_page = document.createElement("div");
        // let p_page = document.createElement("p");

        // Add seperator to between groups
        seperator.className = "seperator";


        // Add arrow icon
        arrow_icon.src = "./icons/main_list/arrow_icon.svg";


        // Add to DOM created group elements
        div_group.className = "sidebar_group_div";
        p_group.className = "sidebar_group_title";

        p_group.innerText = group.group;
        div_group.appendChild(seperator);
        div_group.appendChild(p_group);


        // Add to group elements created pages
        let group_pages = group.pages;



        group_pages.map((page) => {




            let div_page = document.createElement("div");
            let icon_page = document.createElement("img");
            let p_page = document.createElement("p");

            // console.log(arrow_icon);
            // if (page.children.length !== 0) {
            //     p_page.appendChild(arrow_icon);
            // }

            icon_page.src = page.icon;
            icon_page.className = "sidebar_page_icon";
            p_page.className = "sidebar_pages_title";
            div_page.className = "sidebar_page_div";

            p_page.innerText = page.title;
            div_page.appendChild(icon_page);
            div_page.appendChild(p_page);
            div_page.appendChild(arrow_icon);
            div_group.appendChild(div_page);



        })



        menu_container.appendChild(div_group);

        // console.log(group);

    })

}

DrawMenu();
