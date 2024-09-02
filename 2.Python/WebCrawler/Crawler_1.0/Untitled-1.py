import pygame
import random

pygame.init()

# 게임 화면 크기 설정
screen_width = 480
screen_height = 640
screen = pygame.display.set_mode((screen_width, screen_height))

# 게임 타이틀 설정
pygame.display.set_caption("리듬 게임")

# FPS 설정
clock = pygame.time.Clock()

# 공 이미지 불러오기
ball_image = pygame.image.load("ball.png")

# 공 초기 위치 설정
ball_x_pos = 50
ball_y_pos = 0

# 공 이동 속도 설정
ball_speed = 10

# 입력받을 키 설정
key_dict = {
    pygame.K_LEFT: "LEFT",
    pygame.K_RIGHT: "RIGHT",
    pygame.K_UP: "UP",
    pygame.K_DOWN: "DOWN"
}

# 게임 시작
running = True
while running:
    dt = clock.tick(60)  # FPS 설정

    # 이벤트 처리
    for event in pygame.event.get():
        if event.type == pygame.QUIT:  # 게임 창을 닫으면 게임 종료
            running = False

    # 공 이동 처리
    ball_y_pos += ball_speed

    # 공이 화면을 벗어나면 새로운 공 생성
    if ball_y_pos > screen_height:
        ball_x_pos = random.randrange(0, screen_width)
        ball_y_pos = 0

    # 화면에 공 그리기
    screen.blit(ball_image, (ball_x_pos, ball_y_pos))

    # 입력받은 키에 따라 처리
    keys = pygame.key.get_pressed()
    for key in key_dict:
        if keys[key]:
            print(key_dict[key])

    pygame.display.update()  # 화면 업데이트

pygame.quit()  # 게임 종료
