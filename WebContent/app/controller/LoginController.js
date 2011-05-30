/**
 * 
 */
Ext.define('javaExtjs.controller.LoginController',{
	extend: 'Ext.app.Controller'
	, views: ['Login.LoginView']
	, init: function(){
		this.control({
			'loginview button[action=acesso]': {
				click:this.logar
			}
		});
	}
	 
	, logar: function(){
		var form = Ext.getCmp('formLogin').getForm();
        if (form.isValid()) {
            form.submit({
            	method:'POST'
                , success: function() {
                	Ext.Msg.alert('Status', 'Login Successful!', function(btn, text){
                		if (btn == 'ok'){
    						window.location = 'main.action';
    					}
                	
                });
                }
            	, failure:function(form, action){
    				if(action.failureType == 'server'){    					
//    					obj = Ext.util.JSON.decode(action.response.responseText);
//    					Ext.Msg.alert('Login Failed!', obj.errors.msg);
    					Ext.Msg.alert('Login Failed!', 'Login failed. Try again.');
    				}else{
    					Ext.Msg.alert('Warning!', 'Authentication server is unreachable : ' + action.response.responseText);
    				}
    				Ext.getCmp('formLogin').getForm().reset();
    			} 

    			});
        }
		
		//console.log('Comando Atualizar');
	}
});