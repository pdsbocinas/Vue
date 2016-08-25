new Vue ({

	el: "#main",

	data: {
		nombre: "Juan",
	},

	methods: {
		
		saludar: function(_evt){
			alert('Hola!!!' + this.nombre);
		},

		enviarForm: function(){
			alert('Enviando Formulario...');
		},

	},
});