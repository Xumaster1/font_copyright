'''
    单图测试
'''

import torch
from torchvision.models import resnet18
from PIL import Image
import torchvision.transforms as transforms
import os

# transform_BZ= transforms.Normalize(
#     mean=[0.46402064, 0.45047238, 0.37801373],  # 取决于数据集
#     std=[0.2007732, 0.196271, 0.19854763]
# )
#
#
# def padding_black(img,img_size = 80):  # 如果尺寸太小可以扩充
#     w, h = img.size
#     scale = img_size / max(w, h)
#     img_fg = img.resize([int(x) for x in [w * scale, h * scale]])
#     size_fg = img_fg.size
#     size_bg = img_size
#     img_bg = Image.new("RGB", (size_bg, size_bg))
#     img_bg.paste(img_fg, ((size_bg - size_fg[0]) // 2,
#                           (size_bg - size_fg[1]) // 2))
#     img = img_bg
#     return img


# img_path = r'./images/test.jpg'
# val_tf = transforms.Compose([  ##简单把图片压缩了变成Tensor模式
#         transforms.Resize(80),
#         transforms.ToTensor(),
#         transform_BZ  # 标准化操作
# ])


def getresult(img_path):
    transform_BZ = transforms.Normalize(
        mean=[0.46402064, 0.45047238, 0.37801373],  # 取决于数据集
        std=[0.2007732, 0.196271, 0.19854763]
    )

    def padding_black(img, img_size=80):  # 如果尺寸太小可以扩充
        w, h = img.size
        scale = img_size / max(w, h)
        img_fg = img.resize([int(x) for x in [w * scale, h * scale]])
        size_fg = img_fg.size
        size_bg = img_size
        img_bg = Image.new("RGB", (size_bg, size_bg))
        img_bg.paste(img_fg, ((size_bg - size_fg[0]) // 2,
                              (size_bg - size_fg[1]) // 2))
        img = img_bg
        return img

    # img_path = r'./images/test.jpg'
    val_tf = transforms.Compose([  ##简单把图片压缩了变成Tensor模式
        transforms.Resize(80),
        transforms.ToTensor(),
        transform_BZ  # 标准化操作
    ])
    # 如果显卡可用，则用显卡进行训练
    device = "cuda" if torch.cuda.is_available() else "cpu"
    print(f"Using {device} device")

    finetune_net = resnet18(num_classes=46).to(device)

    state_dict = torch.load(r"resnet18_e_last.pth")
    # print("state_dict = ",state_dict)
    finetune_net.load_state_dict(state_dict)
    finetune_net.eval()
    with torch.no_grad():

        # finetune_net.to(device)
        img = Image.open(img_path)  # 打开图片
        img = img.convert('RGB')  # 转换为RGB 格式
        img = padding_black(img)
        img = val_tf(img)
        img_tensor = torch.unsqueeze(img, 0)    # N,C,H,W, ; C,H,W

        img_tensor = img_tensor.to(device)
        result = finetune_net(img_tensor)


        print(result,"result")
        id = result.argmax(1).item()
        print(result)


        #
        # file_list=[]
        # for a,b,c in os.walk("data"):
        #     if len(b) != 0:
        #         file_list = b
        #         print("预测结果为：",file_list[id])
        f = open('cace.txt', encoding='utf-8')
        dict = {}
        for line in f:
            # print(line.strip().split(' '))
            dict[line.strip().split(' ')[0]] = line.strip().split(' ')[3]
        return dict[str(id)]
