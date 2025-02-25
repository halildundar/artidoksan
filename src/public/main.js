
import "./main.scss";
// import { Tooltip, Toast, Popover } from 'bootstrap'
import "./assets/giris-adres-sm.webp";
$(document).ready(function () {
    // console.log('host', window.location.host);
    // console.log('hostname', window.location.hostname);
    // console.log('origin', window.location.origin);
    // console.log('href', window.location.href);
    // console.log('pathname', window.location.pathname);
    serviceSideBarArea();
});
const serviceSideBarArea = ()=>{
    if($(".frm-area")){
       
        if(window.location.pathname === "/urun-belgelendirme/lift"){
            $(".frm-area").append($('<button>',{
                class:'btn-blue min-w-full',
                text:"BAŞVURU FORMU"
            })).append($('<button>',{
                class:'btn-blue min-w-full',
                text:"BELGELENDİRME ŞARTLARI"
            })).append($('<button>',{
                class:'btn-blue min-w-full',
                text:"ASANSÖR CE MODÜLLER"
            }));
        }else if(window.location.pathname === "/urun-belgelendirme/machinery"){
            $(".frm-area").append($('<button>',{
                class:'btn-blue min-w-full',
                text:"BAŞVURU FORMU"
            })).append($('<button>',{
                class:'btn-blue min-w-full',
                text:"BELGELENDİRME ŞARTLARI"
            })).append($('<button>',{
                class:'btn-blue min-w-full',
                text:"MAKİNE CE MODÜLLER"
            }));
        }else if(window.location.pathname == "/sistem-belgelendirme/iso9001"){
            $(".frm-area").append($('<button>',{
                class:'btn-blue min-w-full',
                text:"IS0 9001 BAŞVURU fORMU"
            })).append($('<button>',{
                class:'btn-blue min-w-full',
                text:"IS0 9001 BELGELENDİRME ŞARTLARI"
            }));
        }else if(window.location.pathname == "/sistem-belgelendirme/iso14001"){
            $(".frm-area").append($('<button>',{
                class:'btn-blue min-w-full',
                text:"IS0 14001 BAŞVURU fORMU"
            })).append($('<button>',{
                class:'btn-blue min-w-full',
                text:"IS0 14001 BELGELENDİRME ŞARTLARI"
            }));
        }else if(window.location.pathname == "/sistem-belgelendirme/iso22000"){
            $(".frm-area").append($('<button>',{
                class:'btn-blue min-w-full',
                text:"IS0 22000 BAŞVURU fORMU"
            })).append($('<button>',{
                class:'btn-blue min-w-full',
                text:"IS0 22000 BELGELENDİRME ŞARTLARI"
            }));
        }else if(window.location.pathname == "/sistem-belgelendirme/iso27001"){
            $(".frm-area").append($('<button>',{
                class:'btn-blue min-w-full',
                text:"IS0 27001 BAŞVURU fORMU"
            })).append($('<button>',{
                class:'btn-blue min-w-full',
                text:"IS0 27001 BELGELENDİRME ŞARTLARI"
            }));
        }else if(window.location.pathname == "/sistem-belgelendirme/iso45001"){
            $(".frm-area").append($('<button>',{
                class:'btn-blue min-w-full',
                text:"IS0 45001 BAŞVURU fORMU"
            })).append($('<button>',{
                class:'btn-blue min-w-full',
                text:"IS0 45001 BELGELENDİRME ŞARTLARI"
            }));
        }else if(window.location.pathname == "/sistem-belgelendirme/iso13485"){
            $(".frm-area").append($('<button>',{
                class:'btn-blue min-w-full',
                text:"IS0 13485 BAŞVURU fORMU"
            })).append($('<button>',{
                class:'btn-blue min-w-full',
                text:"IS0 13485 BELGELENDİRME ŞARTLARI"
            }));
        }
        else if(window.location.pathname == "/sistem-belgelendirme/iso10002"){
            $(".frm-area").append($('<button>',{
                class:'btn-blue min-w-full',
                text:"IS0 10002 BAŞVURU fORMU"
            })).append($('<button>',{
                class:'btn-blue min-w-full',
                text:"IS0 10002 BELGELENDİRME ŞARTLARI"
            }));
        }
        else if(window.location.pathname == "/sistem-belgelendirme/iso50001"){
            $(".frm-area").append($('<button>',{
                class:'btn-blue min-w-full',
                text:"IS0 50001 BAŞVURU fORMU"
            })).append($('<button>',{
                class:'btn-blue min-w-full',
                text:"IS0 50001 BELGELENDİRME ŞARTLARI"
            }));
        }
       
    }
}