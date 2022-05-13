function greater(){
	n = document.getElementById("num").value;
	let tg;
	let a = [];
	let s
	for(let i = 0; i <n; i++){
		a[i] = prompt();
	}
	for(let i = 0; i < n; i++){
		for(let j = i+1; j <= n; j++){
			if(a[i] < a[j]){
				tg = a[i];
				a[i] = a[j];
				a[j] = tg;
			}
		}
	}
	for(let i = 0; i <n; i++){
		document.write(a[i] + " ");
	}
}
function smaller(){
	n = document.getElementById("num").value;
	let tg, a = [];
	for(let i = 0; i <n; i++){
		a[i] = prompt();
	}
	for(let i = 0; i < n; i++){
		for(let j = i+1; j <= n; j++){
			if(a[i] > a[j]){
				tg = a[i];
				a[i] = a[j];
				a[j] = tg;
			}
		}
	}
	for(let i = 0; i <n; i++){
		document.write(a[i] + " ");
	}
}
