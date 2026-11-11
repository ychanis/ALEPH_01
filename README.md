# 송영찬 | Network & Security Engineer Portfolio

공개 사이트: https://aleph-songyc-01.vercel.app/

네트워크·보안 인프라의 담당 범위, 설계 이유, 구현, 검증, 문제 해결을 정리한 정적 포트폴리오입니다.

## 프로젝트

- **글로벌 게임회사 IT 인프라 설계 및 구축**: HQ 네트워크, VLAN·Trunk·DHCP Relay·Routing 구성과 장애 점검.
- **물류센터·물류 DC 네트워크 및 보안 인프라 구축**: 3인 팀 프로젝트. 본사 ERP와 서비스 DC는 팀원이 담당하고, 물류센터·물류 DC·WMS·물류 측 보안 및 로그 수집은 직접 담당했습니다.

물류 상세에는 역할 분담, 논리 구성도, 분리된 센터·DC·거점 연동 구성도, 주소 계획, 설계 근거, 구현 범위, 실제 HTTP·로그 확인 결과, 장애 진단 사례를 담았습니다. 센터 보안 확장은 설계로, DC 중앙 로그 수집은 rsyslog 구현으로 설명합니다.

## 구성

- `index.html`: 소개·경력
- `projects.html`: 두 프로젝트 목록과 독립 상세 모달
- `script.js`: 모달 열기·닫기, 초점 복원, 키보드 탭 탐색
- `style.css`: 공통 반응형 디자인과 사례 연구 스타일
- `hq-topology.png`: 기존 HQ 토폴로지
- `assets/logistics/center-network.svg`: 센터 네트워크
- `assets/logistics/dc-network.svg`: 물류 DC 네트워크
- `assets/logistics/interconnection.svg`: 거점별 VPN·API 요청 방향

빌드 없이 정적 서버로 실행할 수 있습니다. API 키·VPN 공유키·비밀번호는 포함하지 않습니다.
