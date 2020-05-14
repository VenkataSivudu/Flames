window.onload = (event) => {
debugger;
    // console.info('page is fully loaded');

var app = new Vue({
  el: '#app',
  data: {
    message:'FLAMES!',
    yourName: '',
    hisHerName: '',
    inputMode: true,
    outputMode: false,
    yourNameList: [],
    hisHerNameList: [],
    response_json: {},
    flames_value: '',
    Ttl_Lngth: '',
},
methods: {
	flame: function() {
		debugger;
		console.log(this.input+"requestmessage");
		if (this.yourName.length <= 0 || this.hisHerName.length <= 0){
                    return false;
                }
                if (this.yourName.toUpperCase() == this.hisHerName.toUpperCase())
		{
                    return false;
                }
		axios.post('https://venkatvenkatsivudusivudu-eval-test.apigee.net/flames',
			{
		ur_name : this.yourName,
		frnd_name : this.hisHerName

	   },
			    { headers: {
      				'Content-type': 'text/plain',
      					}
    			}).then(response =>{
				this.response_json = response.data;
				this.flames_value = response.data.result;
				this.yourNameList = response.data.rslt_ur_name;
				this.hisHerNameList = response.data.rslt_his_name;
				this.Ttl_Lngth =  response.data.flm_length;

				});
		  this.inputMode = false;
                  this.outputMode = true;
		  //this.flames_value = this.response_json.result;
		  //Rsp_JSON = JSON.parse(this.response);
		
		  this.flames_value.strike();

	}
   }
})
};
