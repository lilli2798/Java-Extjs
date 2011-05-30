package br.com.mobtelecom.entitys;

import java.util.Date;

public class Usuario {

			  private long id;
			  private String login;
			  private String senha;
			  private Date ultimo_login;
			  private int perfis_id;
			  private int membros_id;
			  
			  
			public long getId() {
				return id;
			}
			public void setId(long id) {
				this.id = id;
			}
			public String getLogin() {
				return login;
			}
			public void setLogin(String login) {
				this.login = login;
			}
			public String getSenha() {
				return senha;
			}
			public void setSenha(String senha) {
				this.senha = senha;
			}
			public Date getUltimo_login() {
				return ultimo_login;
			}
			public void setUltimo_login(Date ultimo_login) {
				this.ultimo_login = ultimo_login;
			}
			public int getPerfis_id() {
				return perfis_id;
			}
			public void setPerfis_id(int perfis_id) {
				this.perfis_id = perfis_id;
			}
			public int getMembros_id() {
				return membros_id;
			}
			public void setMembros_id(int membros_id) {
				this.membros_id = membros_id;
			}
			  
			  
			  ;
}
