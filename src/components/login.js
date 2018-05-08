
var component = {
  name: "Login",
  data: function() {
    return {
      name: 'weimian',
      age: '',
      phone: ''
    }
  },
  methods: {
    onSubmitTap: function() {
        if(!this.name) return;
        if(!this.phone) return;
        var url = "http://120.77.150.28:8080";
        var options = {
            method: 'POST',
            // mode: 'no-cors',   //设置跨域
        };
        var data = {
            name: this.name,
            age: this.age,
            phone: this.phone
        }
        options.body = JSON.stringify(data);
        var myRequest = new Request(options);
        // fetch(myRequest).then(function(res) {
        //     console.log(res.text());
        //     return res.text();
        // }).then(function(data) {
        //     console.log(data);
            
        // })

        fetch(url,options).then(function(res) {
            return res.text();
        }).then(function(res) {
            console.log(res);
        }) 
    }
  }
}
export default component