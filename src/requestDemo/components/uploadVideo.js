import React from "react";

const UploadVideo=()=>{    
    const defaultBtnActive=()=>{
        const defaultBtn = document.querySelector("#default-btn");
        defaultBtn.click();
    }
    const handleUploadVideo=()=>{
        const containerUploadFile = document.querySelector(".container_section_uploadFile");
        const uploadFile = document.querySelector(".uploadFile");
        const fileName = document.querySelector(".file-name");
        const source = document.querySelector(".video video");
        const defaultBtn = document.querySelector("#default-btn");

        const file = defaultBtn.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = function(file){
                var fileContent = file.target.result;
                source.setAttribute("src",fileContent);
                containerUploadFile.classList.add("active");
                uploadFile.classList.add('removeClick');
            }
            reader.readAsDataURL(file);
        }
        if(defaultBtn.value){
            fileName.textContent = defaultBtn.files[0].name.split(".")[0];
        }
    }
    const handleCloseUploader=()=>{
        const containerUploadFile = document.querySelector(".container_section_uploadFile");
        const uploadFile = document.querySelector(".uploadFile");
        const source = document.querySelector(".video video");

        source.setAttribute("src","");
        uploadFile.classList.remove('removeClick');
        containerUploadFile.classList.remove("active");
    }

    return(
        <div class="container_section_uploadFile">
            <div class="uploadFile" onClick={defaultBtnActive}>
            <div class="video">
                <video src=""></video>
            </div>
            <div class="content">
                <div class="text">
                    video of seleted section here
                </div>
            </div>
            <div class="file-name">
                File name here
            </div>
            </div>
            <div id="cancel-btn">
                <i class="fas fa-times" onClick={handleCloseUploader}></i>
            </div>
            <input id="default-btn" type="file" hidden onChange={handleUploadVideo} />
        </div>
    )
}
export default UploadVideo;