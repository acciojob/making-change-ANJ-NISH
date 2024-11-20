const makeChange = (c) => {

	let x=c;
	let mincoins=101;
	let qc=parseInt(x/25);

	let obj;

	for(let i=0;i<=qc;i++)
		{
			let coins=0;
			coins+=i;
			let lefta=x-i*25;
			let dc=parseInt(lefta/10);

			for(let j=0;j<=dc;j++)
				{
					coins+=j;
					let leftb=lefta-j*10;
					let nc=parseInt(leftb/5);

					for(let k=0;k<=nc;k++)
						{
							coins+=k;
							let leftc=leftb-k*5;
							coins+=leftc;

							if(coins<mincoins)
							{
                                 mincoins=coins;
								obj={"q": i,"d": j,"n": k,"p": leftc}
							}
						}
				}
		}
	return obj;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

