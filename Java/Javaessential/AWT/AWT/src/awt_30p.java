import java.awt.*;

public class awt_30p {
	public static void main(String[] args) {
		MenuBar mb = new MenuBar();
		Menu mFile = new Menu("File");
		
		MenuItem miNew = new MenuItem("New");
		MenuItem miOpen = new MenuItem("Open");
		Menu mOthers = new Menu("Others");
		MenuItem miExit = new MenuItem("Exit");
		
		mFile.add(miNew); //Menu�� MenuItem�� �߰�.
		mFile.add(miOpen); //Menu�� MenuItem�� �߰�.
		mFile.add(mOthers); //Menu�� Menu�� �߰�.
		mFile.addSeparator(); // �޴��и��� ����.
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
