new Vue ({

	el: "#main",

	data: {
		nombre: "",
		edad: "",
		sexo: "",
		mail: ""
	},

	methods: {

		enviarDatos: function(){

			if( this.nombre && this.sexo && this.mail && this.edad ){
				alert('Enviando mensaje ...');
			}else{
				alert('Rellene los campos ...');
			}
		}
	},

	computed: {

		todaLaInfo: function(){
			return this.nombre && this.sexo && this.mail && this.edad;
		}
	},

});