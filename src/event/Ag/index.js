import React from 'react'
import { Wrapper, Main, SectionWrapper, Section, ListWrapper, Button, Table } from './styled.js'
import { GlobalStyle } from '../Ag/styled.js'

const AgComponent = () => (
    <>
        <GlobalStyle />
        <Wrapper>
            <Main>
                <SectionWrapper>
                    <Section>
                        <h2>活动场所</h2>
                        <p>AG真人<br/>游戏平台</p>
                    </Section>
                    <Section>
                        <h2>活动对象</h2>
                        <p>彩立方<br/>全体会员</p>
                    </Section>
                    <Section>
                        <h2>申请方式</h2>
                        <p>1. 满足条件者需于注单结算后向在线客服申请。</p>
                        <p>2. 若出现和局等情况不视为中断连赢，只会不计算该局胜负；</p>
                        <p>&nbsp;&nbsp;&nbsp;如：赢赢赢和赢和赢赢，视为6连赢。</p>
                    </Section>
                    <Section>
                        <h2>活动内容</h2>
                        <p>活动期间，会员在百家乐游戏中投注，如果出现连赢或连输，即可获得奖励金</p>
                        <Table>
                            <thead>
                                <tr>
                                    <th>适用<br className="break-on-mobile" />平台</th>
                                    <th>最低<br className="break-on-mobile" />投注金额</th>
                                    <th>连赢<br className="break-on-mobile" />局数</th>
                                    <th>连赢<br className="break-on-mobile" />红利</th>
                                    <th>流水倍数<br className="break-on-mobile" />(红利部分)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan="4">AG真人</td>
                                    <td rowSpan="4" style={{background: '#d0fff5'}}>100</td>
                                    <td style={{background: '#dec7fd', color: '#39008a'}}>6</td>
                                    <td style={{background: '#f8c5c5', color: '#690101'}}>58</td>
                                    <td rowSpan="4" style={{background: '#fff3dc', color: '#774f05'}}>1</td>
                                </tr>
                                <tr>
                                    <td style={{background: '#ebdcff', color: '#39008a'}}>10</td>
                                    <td style={{background: '#ffd8d8', color: '#690101'}}>388</td>
                                </tr>
                                <tr>
                                    <td style={{background: '#dec7fd', color: '#39008a'}}>15</td>
                                    <td style={{background: '#f8c5c5', color: '#690101'}}>1388</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Section>
                </SectionWrapper>
                <ListWrapper>   
                    <h3>活动规则</h3>
                    <ul>
                        <li>本活动与平台其它活动流水共享，满足条件即可参加；</li>
                        <li>有效投注额定义：相应游戏平台游戏流水总额，任何对押、和局、无效的、投注失败的、未产生输赢结果的投注不计算为有效流水，可参考“投注记录”内数据；</li>
                        <li>每位真实有效玩家/每一手机号码/电子邮箱/户籍地址/现居地址/同一银行卡/每一IP地址/每一台电脑或上网设备，仅能参加并享受一次该活动，违规不享受该活动；</li>
                        <li>此活动为平台提供给玩家的福利，任何用户或团体以不正常的方式投注、套取活动优惠，平台保留在不通知的情况下冻结账户的权利，并不退还款项；</li>
                        <li>彩立方有权对该活动进行修改、暂停、取消等，无需特别通知，并保留对该活动的最终解释权。</li>
                    </ul>
                </ListWrapper>
            </Main>
            <Button href="/service?type=onlineChat" target="_blank"></Button>
        </Wrapper>
    </>
)

export default AgComponent
