import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 60px 20px 40px;

        .container {
            display: grid;
            grid-template-columns: 1.1fr 1fr;
            gap: 40px;
            align-items: center;

            @media (width < 1000px) {
                grid-template-columns: 1fr;
            }
        }

        .left {
            position: relative;
        }

        .badge {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 800;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
            color: var(--color-text-secondary);
        }

        .title {
            margin-top: 18px;
            font-size: 40px;
            font-weight: 900;
            letter-spacing: 0.5px;
            color: var(--color-text-primary);
        }

        .subtitle {
            margin-top: 16px;
            max-width: 560px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .principles {
            margin-top: 28px;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .pItem {
            display: flex;
            align-items: center;
            gap: 12px;
            font-weight: 700;
            color: var(--color-text-secondary);

            svg {
                width: 18px;
                height: 18px;
                color: var(--color-primary);
            }
        }

        .right {
            display: flex;
            justify-content: center;
        }

        .card {
            width: 100%;
            border-radius: 22px;
            padding: 28px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 30px 60px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background: radial-gradient(
                600px 200px at 0% 0%,
                color-mix(in srgb, var(--color-primary) 14%, transparent),
                transparent 70%
            );
            opacity: 0.8;
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 900;
            letter-spacing: 0.3px;
            color: var(--color-text-primary);
            margin-bottom: 20px;
        }

        .grid {
            display: grid;
            gap: 18px;
        }

        .gItem {
            display: flex;
            gap: 14px;
            align-items: flex-start;
        }

        .gItem svg {
            width: 18px;
            height: 18px;
            margin-top: 3px;
            color: var(--color-accent);
        }

        .gHead {
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .gSub {
            margin-top: 4px;
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
        }

        .footerNote {
            margin-top: 24px;
            padding-top: 16px;
            border-top: 1px solid var(--color-border);
            font-weight: 700;
            font-size: 14px;
            color: var(--color-text-secondary);
        }

        .buildMeta {
            margin-top: 18px;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            font-weight: 700;
            color: var(--color-text-muted);

            svg {
                width: 14px;
                height: 14px;
                color: var(--color-primary);
            }
        }
    `,
};
