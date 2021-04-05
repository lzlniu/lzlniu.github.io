/*
function main_text2_gen(main_text2_num:number,main_text2_info:string,mt2g:any) {
    if (main_text2_num>0) {
        mt2g=<div><p>{main_text2_info}</p></div>;
        main_text2_num--;
    }
    else {
        return mt2g;
    }
    main_text2_gen(main_text2_num,main_text2_info,mt2g);
};
*/
export const gen_main_text2 = (main_text2:string) => {
    //main_text2_gen(main_text2_num,`This is count: ${main_text2_num}`,mt2g_str);
    if (main_text2!='' && main_text2!=null) {
        return (<div id="main_text2"><p>{main_text2}</p></div>);   
    }
    else {
        return (<div></div>); 
    }
};
