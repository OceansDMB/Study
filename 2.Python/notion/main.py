from notion.client import NotionClient

client = NotionClient(
    token_v2="c4624d51df7554220ad42ba09178052021a0e2bd55c1d83586ff1448f18cf6936a5b1faf67c7c39695dcd0007bb1ebe0d794385afdc6ac050cc39a849126632cf658f9fbebab2e471aab207f3469")

page = client.get_block(
    "https://www.notion.so/13d793990b2843d28b1220a3f620f840?v=9788b51348e049668884faa4ee083c1a")

print("페이지 제목", page.title)

for child in page.children : 
    print(child.title)
    
print("Parent of {} is {}".format(page.id,page.parent.id))