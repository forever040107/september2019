import React from 'react'
import TopHeader from '../../TopHeader'
import { Wrapper, Main, SectionWrapper, Section, ListWrapper, ButtonWrapper, Button, Table } from './styled.js'

const NationalDayComponent = () => (
    <>
        <TopHeader />
        <Wrapper>
            <Main>
                <SectionWrapper>
                    <Section>
                        <h2>活动场所</h2>
                        <p>彩票游戏平台</p>
                    </Section>
                    <Section>
                        <h2>活动对象</h2>
                        <p>彩立方全体会员</p>
                    </Section>
                    <Section>
                        <h2>申请方式</h2>
                        <ul>
                            <li>会员需要将您的游戏账号提供给在线客服报名登记此活动。</li>
                            <li>只需要报名一次，每日满足条件者的奖金将于次日18:00前自动审核派发。</li>
                            <li>活动结束后，满足签到条件者的奖金将于10月16日18:00前自动审核派发。<br/>例子：活动期间会员当日总投注额为5,000（大于3,000即签到成功），次日获得红利金5,000*3‰=15<br/>会员累计签到25天，总投注额为75,000，7/1可额外获得奖励金75,000*3‰=225。</li>
                        </ul>
                    </Section>
                    <Section>
                        <h2>活动内容</h2>
                        <Table>
                            <thead>
                                <tr>
                                    <th>当日投注额</th>
                                    <th>赠送比例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>≥3,000</td>
                                    <td>3‰</td>
                                </tr>
                            </tbody>
                        </Table>
                        <p>活动期间每日投注额最低为3,000元即为签到成功，次日获得投注额3‰红利金</p>
                        <Table>
                            <thead>
                                <tr>
                                    <th>累计签到天数</th>
                                    <th>7天</th>
                                    <th>15天</th>
                                    <th>25天</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>赠送比例</td>
                                    <td>1‰</td>
                                    <td>2‰</td>
                                    <td>3‰</td>
                                </tr>
                            </tbody>
                        </Table>
                        <p>活动结束后，累计签到达到以下天数的会员，额外获得对应比例奖励金</p>
                    </Section>
                </SectionWrapper>
                <ListWrapper>   
                    <h3>活动规则</h3>
                    <ul>
                        <li>本活动与平台其它活动流水共享，满足条件即可参加；</li>
                        <li>彩金每可直接提现或进行游戏；</li>
                        <li>有效投注额定义：相应游戏平台游戏流水总额，任何对押、和局、无效的、投注失败的、未产生输赢结果的投注不计算为有效流水，可参考“投注记录”内数据；</li>
                        <li>每位真实有效玩家/每一手机号码/电子邮箱/户籍地址/现居地址/同一银行卡/每一IP地址/每一台电脑或上网设备，仅能参加并享受一次该活动，违规不享受该活动；</li>
                        <li>此活动为平台提供给玩家的福利，任何用户或团体以不正常的方式投注、套取活动优惠，平台保留在不通知的情况下冻结账户的权利，并不退还款项；</li>
                        <li>彩立方有权对该活动进行修改、暂停、取消等，无需特别通知，并保留对该活动的最终解释权。</li>
                    </ul>
                </ListWrapper>
            </Main>
            <ButtonWrapper>
                <Button href="/service?type=onlineChat" target="_blank"></Button>
            </ButtonWrapper>
        </Wrapper>
    </>
)

export default NationalDayComponent
