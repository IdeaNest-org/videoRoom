const isDev=localStorage.getItem("is_dev"),jsUrl=isDev?"http://localhost:3000":"https://videoroom.focusbe.com";document.write('<script async src="'+jsUrl+'/static/main.js"><\/script>');