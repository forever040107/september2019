import React from 'react'
import TopHeader from '../../TopHeader'
import { Wrapper, Main, SectionWrapper, Section, ListWrapper, ButtonWrapper, Button, Table } from './styled.js'

const ChipComponent = () => (
    <>
        <TopHeader />
        <Wrapper>
            <Main>
                <SectionWrapper>
                    <Section>
                        <h2>活动场所</h2>
                        <p>乐游棋牌游戏平台</p>
                    </Section>
                    <Section>
                        <h2>活动对象</h2>
                        <p>彩立方全体会员</p>
                    </Section>
                    <Section>
                        <h2>申请方式</h2>
                        <p>仅每周一18:00可与在线客服报名登记，并于当日18:00左右统一审核派发。</p>
                    </Section>
                    <Section>
                        <h2>活动内容</h2>
                        <Table>
                            <thead>
                                <tr>
                                    <th>适应平台</th>
                                    <th>上周累计流水</th>
                                    <th>红利上限</th>
                                    <th>流水倍数</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan="5">乐游棋牌</td>
                                    <td>=>3000</td>
                                    <td>8</td>
                                    <td rowSpan="5">1倍</td>
                                </tr>
                                <tr>
                                    <td>=>10000</td>
                                    <td>28</td>
                                </tr>
                                <tr>
                                    <td>=>30000</td>
                                    <td>58</td>
                                </tr>
                                <tr>
                                    <td>=>50000</td>
                                    <td>128</td>
                                </tr>
                                <tr>
                                    <td>=>100000</td>
                                    <td>258</td>
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
            <ButtonWrapper>
                <Button href="/service?type=onlineChat" target="_blank"></Button>
            </ButtonWrapper>
        </Wrapper>
    </>
)

export default ChipComponent
