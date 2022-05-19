import java.awt.*;

public class awt_30p {
	public static void main(String[] args) {
		MenuBar mb = new MenuBar();
		Menu mFile = new Menu("File");
		
		MenuItem miNew = new MenuItem("New");
		MenuItem miOpen = new MenuItem("Open");
		Menu mOthers = new Menu("Others");
		MenuItem miExit = new MenuItem("Exit");
		
		mFile.add(miNew); //Menu에 MenuItem을 추가.
		mFile.add(miOpen); //Menu에 MenuItem을 추가.
		mFile.add(mOthers); //Menu에 Menu를 추가.
		mFile.addSeparator(); // 메뉴분리선 삽입.
		mFile.add(miExit);
		
		MenuItem miPrint = new MenuItem("Print..");
		MenuItem miPreView = new MenuItem("Print Preview");
		MenuItem miSetup = new MenuItem("Print Setup...");
		mOthers.add(miPrint);
		mOthers.add(miPreView);
		mOthers.add(miSetup);		
		
		Menu mEdit = new Menu("Edit");
		Menu mView = new Menu("View");
		Menu mHelp = new Menu("Help");
		CheckboxMenuItem miStatusbar = new CheckboxMenuItem("Statusbar");
		
	}
}
