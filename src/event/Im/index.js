import React from 'react'
import { GlobalStyle, Wrapper, Main, SectionWrapper, Section, ColorBg, ListWrapper, Button, Table } from './styled.js'

const ImComponent = () => (
    <>
        <GlobalStyle />
        <Wrapper>
            <Main>
                <SectionWrapper>
                    <Section>
                        <h2>活动场所</h2>
                        <p>IM体育游戏平台</p>
                    </Section>
                    <Section>
                        <h2>活动对象</h2>
                        <p>彩立方全体会员</p>
                    </Section>
                    <Section>
                        <h2>申请方式</h2>
                        <p>满足条件者需于注单结算后向在线客服申请。</p>
                    </Section>
                    <Section>
                        <h2>活动内容</h2>
                        <p>活动期间，会员投注体育赛事，结果为输，可获得保险金。</p>
                        <Table>
                            <thead>
                                <tr>
                                    <th>适应<br className="break-on-mobile" />平台</th>
                                    <th>当日<br className="break-on-mobile" />最低存款</th>
                                    <th>单注<br className="break-on-mobile" />投注金额</th>
                                    <th>100%<br className="break-on-mobile" />保险金<br className="break-on-mobile" />上限</th>
                                    <th>流水<br className="break-on-mobile" />倍数</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>IM<br className="break-on-mobile" />体育电竞</td>
                                    <td>=>300</td>
                                    <td>100</td>
                                    <td>100</td>
                                    <td>5</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Section>
                </SectionWrapper>
            </Main>
            <ColorBg>
                <ListWrapper>   
                    <h3>活动规则</h3>
                    <ul>
                        <li>本活动与平台其它活动流水共享，满足条件即可参加；</li>
                        <li>若赛事在北京时间凌晨00:00~08:00AM进行，可提前12小时进行存款。</li>
                        <li>可投注任何赛事、赔率低于欧洲盘1.70，香港盘0.70，正数马来盘0.70，印尼盘-1.43的投注将不符合条件申请此优惠。</li>
                        <li>有效投注额定义：相应游戏平台游戏流水总额，任何对押、和局、无效的、投注失败的、未产生输赢结果的投注不计算为有效流水，可参考“投注记录”内数据；</li>
                        <li>每位真实有效玩家/每一手机号码/电子邮箱/户籍地址/现居地址/同一银行卡/每一IP地址/每一台电脑或上网设备，仅能参加并享受一次该活动，违规不享受该活动；</li>
                        <li>此活动为平台提供给玩家的福利，任何用户或团体以不正常的方式投注、套取活动优惠，平台保留在不通知的情况下冻结账户的权利，并不退还款项；</li>
                        <li>彩立方有权对该活动进行修改、暂停、取消等，无需特别通知，并保留对该活动的最终解释权。</li>
                    </ul>
                </ListWrapper>
                <Button href="/service?type=onlineChat" target="_blank"></Button>
            </ColorBg>
        </Wrapper>
    </>
)

export default ImComponent
