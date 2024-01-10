

export default function PowerShow(combatpower) {
    let power=parseInt(combatpower);
    let n=combatpower.length;

    let a=power%10000;
    let b=(power%100000000-a)/10000;
    let c=Math.trunc(power/100000000);

    let showText="";

    if(c>0){
        showText+=c+"억 ";
        showText+=b+"만 ";
        showText+=a;
    } else{
        if(b>1){
            showText+=b+"만 ";
            showText+=a;
        } else{
            showText+=a;
        }
    }
    return showText;
}