use anchor_lang::prelude::*;

declare_id!("ELIX111111111111111111111111111111111111");

#[program]
pub mod registry {
    use super::*;

    pub fn register_agent(
        _ctx: Context<RegisterAgent>,
        name: String,
    ) -> Result<()> {
        msg!("Registered agent: {}", name);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct RegisterAgent<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
}
