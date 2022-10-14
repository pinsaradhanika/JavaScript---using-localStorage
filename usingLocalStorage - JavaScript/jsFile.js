const form = document.querySelector('form');



form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData);
    
    //local Storage
    const stringifiedFormObject =JSON.stringify(formObject);
    localStorage.setItem('formEntries',stringifiedFormObject);

    const storedForm = localStorage.getItem('formEntries');
    const storedFormObject = JSON.parse(storedForm);

    //variables
    const fullName = storedFormObject.fname;
    let gender = storedFormObject.gender;
    let birthday = storedFormObject.birthday;
    const address = storedFormObject.address;
    const membershipType =storedFormObject.type;
    let contact =storedFormObject.contact;
    let contactType='';
    
    //Number Type
    if (contact.charAt(1) == 7){
        contactType = 'Mobile';
    }
    else
       contactType = 'LandLine';

    //International Number
    contactInter = contact.replace(contact.charAt(0),'+94');       
    
    //Age
    let currentYear =  new Date().getFullYear();
    let birthyear = birthday.slice(0,4);
    let age =  currentYear - birthyear;
    
    //Gender to uppercase
    gender = gender.toUpperCase();
    
    
    //name with initials
    const nameArray = fullName.split(' ');
    let initials = [];
    for(let i=0; i<nameArray.length-1; i++){
        
        initials.push((nameArray[i].charAt(0)).toUpperCase());
    }

    let capInitials = '';
    for(let i=0; i<initials.length; i++){
        capInitials += initials[i] +'.';
    }
    nameWithInitials = capInitials + nameArray[nameArray.length-1];

    //reverse address

    const addressArray = address.split(',');
    let reverseAddressArray = addressArray.reverse();
    let reverseAddress ='';

    for(let i=0; i<reverseAddressArray.length-1; i++){
        reverseAddress += reverseAddressArray[i]+ ','
    }
    reverseAddress= reverseAddress + reverseAddressArray[ reverseAddressArray.length - 1];
    

    //annual tax
    
    let Cost = 0; 
    let feeFinal = 0;

        if(membershipType == 'VIP'){
            Cost=5000;
                    let vipAfterTax = (Cost * 12)/100;
                    feeFinal = Cost + vipAfterTax;
        }
        else if(membershipType =='Gold'){
            Cost=2500;
                    let goldAfterTax = (Cost * 12)/100;
                    feeFinal = Cost + goldAfterTax;
        }
        else{
            Cost = 1000;
                    let generalAfterTax = (Cost * 12)/100;
                    feeFinal = Cost + generalAfterTax;
        }
    
 
    document.getElementById('fullnamedisplay').innerHTML=fullName;
    document.getElementById('initialdisplay').innerHTML=nameWithInitials;
    document.getElementById('addressdisplay').innerHTML=address;
    document.getElementById('reversedaddressdisplay').innerHTML=reverseAddress;
    document.getElementById('contactlocaldisplay').innerHTML=contact;
    document.getElementById('contactinternationaldisplay').innerHTML=contactInter;
    document.getElementById('contacttypedisplay').innerHTML=contactType;
    document.getElementById('genderdisplay').innerHTML=gender;
    document.getElementById('dobdisplay').innerHTML=birthday;
    document.getElementById('agedisplay').innerHTML=age;
    document.getElementById('memtypedisplay').innerHTML=membershipType;
    document.getElementById('memvaltaxdisplay').innerHTML=Cost;
    document.getElementById('finaltaxdisplay').innerHTML=feeFinal;

})