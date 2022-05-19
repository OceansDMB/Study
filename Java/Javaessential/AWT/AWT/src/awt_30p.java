import java.awt.*;

public class awt_30p {
	public static void main(String[] args) {
		Frame f = new Frame("Frame with Menu");
		f.setSize(300,200);
		
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
		mView.add(miStatusbar);
		
		mb.add(mFile); // MenuBar에 Menu를 추가한다.
		mb.add(mEdit);
		mb.add(mView);
		mb.setHelpMenu(mHelp); // mHelp를 HelpMenu로 지정한다.
		
		f.setMenuBar(mb);
		f.setVisible(true);
		
	}
}
