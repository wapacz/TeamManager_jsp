package org.catcher.TaskManager.DAO;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
import org.json.JSONException;

import com.fourspaces.couchdb.Session;

/**
 * Servlet implementation class Proxy
 */
@WebServlet(description = "Used for accessig DB via HTTP requests", urlPatterns = { "/Proxy" })
public class Proxy extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Proxy() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// request.getParameter("id");

		PrintWriter out = response.getWriter();
		JSONObject json = new JSONObject();
		String responseValue = "";
		
		try {		
			Session dbSession = new Session("localhost", 5984);
			//String dbname = "sample_db";
	        //dbSession.deleteDatabase(dbname);
	        
	        List<String> listofdb = dbSession.getDatabaseNames();
	        for (String s : listofdb) {
	        	json.put(s, "avaiable");
	            //System.out.println("List of databases available: " + s);
	        }
			
	        json.put("asdasd", "avaiable");

			json.put("message", "everything is ok");
			responseValue = json.toString();
			//responseValue = "{\"message\" : \"everything is ok\"}";
		}
		catch(JSONException ex) {
			responseValue = "ERROR with JSON";
		}
		finally {
			out.println(responseValue);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
