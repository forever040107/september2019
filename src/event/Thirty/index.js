import React from 'react'
import TopHeader from '../../TopHeader'
import { Wrapper, Main, SectionWrapper, Section, ListWrapper, ButtonWrapper, Button, Table } from './styled.js'

const ThirtyComponent = () => (
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
                        <p>彩立方新注册会员</p>
                    </Section>
                    <Section>
                        <h2>申请方式</h2>
                        <ul>
                            <li>满足条件的用户将您的游戏账号+满足条件的存款单号提供给在线客服，手动申请首存红利，此活动必须要等待彩金派发后才可以进行投注，否则将不予派发；</li>
                            <li>红利比例30%，最高800元，达到规定游戏（首存额+红利）*16倍流水即可提款；<br/>例如：首次存款100元，活动红利30元，达到任意游戏（100+30）*16=2,080流水可提款。</li>
                        </ul>
                    </Section>
                    <Section>
                        <h2>活动内容</h2>
                        <Table>
                            <thead>
                                <tr>
                                    <th>适应平台</th>
                                    <th>红利比例</th>
                                    <th>红利上限</th>
                                    <th>流水倍数</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>彩票游戏</td>
                                    <td>30%</td>
                                    <td>800</td>
                                    <td>16</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Section>
                </SectionWrapper>
                <ListWrapper>   
                    <h3>活动规则</h3>
                    <ul>
                        <li>戏范围包括：一分彩，二分彩，五分彩，欢乐快三，一分快三，F1赛车，F2赛车，F3赛车，急速六合彩，极速3D，如投注其他彩票游戏彩种将视为对刷不予出款；</li>
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

export default ThirtyComponent
