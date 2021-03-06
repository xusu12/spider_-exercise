#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys
sys.path.append("../")
import os
import time

from conf.setting import BASE_DIR
from conf.setting import LOG_DIR
from conf.setting import DATA_DIR
from conf.setting import REPORT_DIR
from conf.setting import CRONTAB_DIR
from utils.util import return_PST


NEW_KEYWORD_P_NUM = 1
date_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(time.time()))
pst_date = return_PST().strftime("%Y-%m-%d %H:%M:%S")

# 获得进程id
def get_pid_list(pstring):
    pList = pstring.split('\n')
    rList = []
    pidList = []
    for p in pList:
        if p and type(p) is str:
            if not 'grep' in p:
                rList.append(p)
    for r in rList:
        if r and type(r) is str:
            pid = r.split(' ')
            idList = []
            for p in pid:
                p = p.strip().lstrip()
                if p:
                    idList.append(p)
            pidList.append(idList[1])

    return pidList


# 获得shell返回值
def shell_return(shell):
    pObj = os.popen(shell)
    pstring = pObj.read()
    return pstring


def get_pid_num(url_type=''):
    Num = 0
    shell_str = ''

    if url_type == 'goods':
        pass

    if url_type == 'reviews':
        pass

    if url_type == 'tosell':
        pass

    if url_type == 'keyword':
        shell = 'ps -ef | grep newkeywordCrawler.py'
        shell_str = shell_return(shell)
        pid_list = get_pid_list(shell_str)
        Num = len(pid_list)

    return Num, shell_str


# 如果日志等所需的目录不存在, 则创建目录
def make_dir():
    if not os.path.exists(LOG_DIR):
        os.makedirs(LOG_DIR)
    if not os.path.exists(DATA_DIR):
        os.makedirs(DATA_DIR)
    if not os.path.exists(REPORT_DIR):
        os.makedirs(REPORT_DIR)
    if not os.path.exists(CRONTAB_DIR):
        os.makedirs(CRONTAB_DIR)


# 关键字进程
def keyword(pNum, shell_str, num):
    msg = '%s(太平洋: %s)当前keywordCrawler.py工作进程 有%s个, 需要启动%s个\n %s' % (date_time, pst_date, num, pNum, shell_str)
    if pNum < 1:
        return print(msg)
    Crawler = os.path.join(BASE_DIR, 'Crawler/newKeywordCrawler.py')
    shell = 'nohup python3 %s > /dev/null 2>&1 &' % (Crawler)
    print(msg)
    for i in range(pNum):
        print(shell)
        req = os.system(shell)
        print(req)
        if req == 0:
            print('%s(太平洋: %s) newKeywordCrawler.py %s done\n' % (date_time, pst_date, i))


def process_monitoring(num, shell_str, url_type=''):
    if url_type == 'goods':
        pass
    if url_type == 'reviews':
        pass
    if url_type == 'tosell':
        pass
    if url_type == 'keyword':
        pNum = NEW_KEYWORD_P_NUM - num
        keyword(pNum, shell_str, num)


def start():
    make_dir()
    url_type = 'keyword'
    Num, shell_str = get_pid_num(url_type=url_type)
    process_monitoring(Num, shell_str, url_type=url_type)


if __name__ == '__main__':
    time1 = time.time()
    start()
    time2 = time.time()
    print('difftime', time2 - time1)