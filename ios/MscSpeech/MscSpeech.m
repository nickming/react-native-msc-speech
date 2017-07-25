//
//  MscSpeech.m
//  MscSpeech
//
//  Created by Nickming on 2017/7/25.
//  Copyright © 2017年 Nickming. All rights reserved.
//

#import "MscSpeech.h"

@implementation MscSpeech
// 导出模块，不添加参数即默认为这个类名
RCT_EXPORT_MODULE();

// 导出方法，桥接到js的方法返回值类型必须是void
RCT_EXPORT_METHOD(doSomething:(NSString *)testStr){
    NSLog(@"%@ ===> doSomething",testStr);
}
@end
