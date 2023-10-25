

let todolist = document.getElementById("main_div_list");


async function getData() {

    let posts = [];
    let users = [];

    let urls = [
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/users")
    ];


    await Promise.all(urls)
        .then((stream) => {
            return Promise.all(stream.map((info) => info.json()))
        }).then((data) => {
            [posts, users] = data;
            console.log(posts);
            console.log(users);
        })


        posts.map((post, i) => {
            // Parent div
            let parent_div = document.createElement("div");

            // Paragraphs 
            let p_id = document.createElement("p");
            let p_user_name = document.createElement("p");
            let p_title = document.createElement("p");

            let div_actions = document.createElement("div");
            let edit_icon = document.createElement("img");
            let delete_icon = document.createElement("img");

            // Draw background gray or white
            if(i % 2 === 0){
                parent_div.style.background = "#FFF";
            }else{
                parent_div.style.background = "#F5F6FA";
            }

            
            // Parent div style
            parent_div.className = "main_div_list_item_div";

            //Find username in array of users
            users.map((user) => {
                if (post.userId === user.id) {
                    p_user_name.innerText = user.name;
                }
            })

            // Add post info to paragraph
            p_id.innerText = post.id;
            p_title.innerText = post.title;
            // p_user_name.innerText = post.userId;
            
            // Add classnames and ids to paragraphs
            p_id.id = "main_div_item_id";
            p_user_name.id = "main_div_item_user_name";
            p_title.id = "main_div_item_title";
            div_actions.id = "main_div_item_actions";

            // Add icons to actions
            edit_icon.src = "./icons/main_list/edit_icon.svg";
            delete_icon.src = "./icons/main_list/delete_icon.svg";
            div_actions.appendChild(edit_icon);
            div_actions.appendChild(delete_icon);


            // Add elements to parent div
            parent_div.appendChild(p_id);
            parent_div.appendChild(p_user_name);
            parent_div.appendChild(p_title);
            parent_div.appendChild(div_actions);
            

            // Add parent div to todolist
            todolist.appendChild(parent_div);

        })

}

getData();