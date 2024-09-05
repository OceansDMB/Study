import java.net.http.HttpClient;
import java.lang.Object;

public class Main {
  public static void main(String[] args) {
    // import org.apache.commons.httpclient.HttpClient;
    String url = "http://192.168.18.84:80/ISAPI/System/deviceInfo";
    HttpClient client = HttpClient.newHttpClient();
// Set the user name and password
    UsernamePasswordCredentials creds = new UsernamePasswordCredentials("admin", "admin12345");
    client.getState().setCredentials(AuthScope.ANY, creds);
    GetMethod method = new GetMethod(url);
    method.setDoAuthentication(true);
    int statusCode = client.executeMethod(method);
    byte[] responseData = method.getResponseBodyAsString().getBytes(method.getResponseCharSet());
    String strResponseData = new String(responseData, "utf-8");
    method.releaseConnection();
// Output received information
    System.out.println(strResponseData);

  }
}