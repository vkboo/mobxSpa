import Component from 'components/Component'
import { Form, Input, Button } from 'antd'
import { observer, inject } from 'mobx-react'

import { createForm } from 'utils/antdUtils'

import { SYSTEM_IDS } from 'settings/consts'

import './style.scss'

@inject('UserInfoStore')
@observer
@createForm()
class SignInForm extends Component {
    onSubmit(values) {
        const { username, password } = values
        this.props.UserInfoStore.signIn(
            { username, password, systemId: SYSTEM_IDS.BD_ORG },
            res => {
                let replaceUrl = '/home'
                G.history.replace(replaceUrl)
            }
        )
    }

    get formItems() {
        return [
            {
                key: 'username',
                component: <Input size='large' placeholder='请输入帐号' />,
                props: {
                    validate: [
                        {
                            trigger: 'onChange',
                            rules: [{ required: true, message: '请填写帐号' }]
                        }
                    ]
                }
            },
            {
                key: 'password',
                component: (
                    <Input
                        size='large'
                        type='password'
                        placeholder='请输入密码'
                    />
                ),
                props: {
                    rules: [{ required: true, message: '请填写密码' }]
                }
            }
        ]
    }

    render({ renderForm }) {
        return (
            <Form onSubmit={this.onSubmit}>
                {renderForm(this.formItems, {
                    data: { username: G.loginName },
                    noWrap: true,
                    noFooter: true,
                    layout: false
                })}
                <Button
                    htmlType='submit'
                    className='submit'
                    loading={this.isLoading}
                >
                    s{this.isLoading ? '登录中...' : '登录'}
                </Button>
            </Form>
        )
    }
}

export default class SignIn extends Component {
    onSubmit() {
        console.log('submit')
    }
    render() {
        const footer = {
            color: 'gray',
            fontSize: 18
        }
        return (
            <div className='signIn'>
                <div className='header' />
                <div className='content'>
                    <div className='logo'>
                        <div className='title'>Backstage management</div>
                    </div>
                    <SignInForm />
                </div>
                <div className='footer' style={footer}>
                    power to go!
                </div>
            </div>
        )
    }
}