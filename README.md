# About
This is sample webapi written in nextjs.

# Vercel: https://vercel.com/new
1. deploy from GitHub  
    https://github.com/TakanariShimbo/sample_webapi_nextjs.git
    
# How to create this
0. install nodejs, npm

1. clone project as sample_webapi_nextjs
    ```
    npx create-next-app@latest sample_webapi_nextjs
    ```

2. into project
    ```
    cd sample_webapi_nextjs
    ```
    
3. delete .git

4. edit pages/api/hello.js
    * change filename hello.js -> sample.js
    * edit
    ```js
    function post_action(req) {
    // get data
    let data_get = req.body;
    let value1 = data_get.value1;
    let value2 = data_get.value2;

    // return data
    let data_send = {
        'value1': value1,
        'value2': value2
    };
    return data_send;
    }


    export default function sample_api(req, res) {
    if (req.method == 'POST') {
        let data_send = post_action(req);
        res.status(200).json(data_send);
    } else {
        res.status(400).json({}); 
    }
    }
    ```

