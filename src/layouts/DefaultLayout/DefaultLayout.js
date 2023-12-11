import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { Footer, Header, Sidebar, Title } from '~/layouts/components/';
import { Breadcrumbs } from '~/layouts/components';
const cx = classNames.bind(styles);

function DefaultLayout() {
    // const formRef = useRef();
    // const { category } = useParams();
    return (
        <div>
            <Header />
            <div className={cx('wrapper')}>
                <Breadcrumbs />
                <Title />
                {/* <form action={'/loai-san-pham/' + category} method="get" ref={formRef}> */}
                <div className={cx('container')}>
                    <div className="grid wide">
                        <div className="row">
                            <div className="col l-3">
                                <Sidebar />
                            </div>
                            <div className="col l-9">
                                <div className={cx('content')}>
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </form> */}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
